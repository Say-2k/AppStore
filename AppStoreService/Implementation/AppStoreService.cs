using AppStore.Data.EntityFramework;
using AppStore.Data.EntityFramework.Models;
using AppStoreService.Interfaces;
using Common.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppStoreService.Implementation
{
    public class AppStoreService : IAppStoreService
    {
        readonly ApplicationContext applicationContext;

        public AppStoreService(ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
        }



        public async Task<IEnumerable<PlatformModel>> GetPlatformsAsync()
        {
            var platforms = await applicationContext.Platform
                .Select(e => new PlatformModel
                {
                    Id = e.Id,
                    Name = e.Name,
                    Icon = e.Icon
                })
                .ToListAsync();

            return platforms;
        }

        public async Task<IEnumerable<LanguageModel>> GetLanguagesAsync()
        {
            var languages = await applicationContext.Language
                .Select(e => new LanguageModel
                {
                    Id = e.Id,
                    Name = e.Name,
                })
                .ToListAsync();

            return languages;
        }

        public async Task<IEnumerable<PriceModel>> GetPricesAsync()
        {
            var prices = await applicationContext.Pricicng
                .Select(e => new PriceModel
                {
                    Id = e.Id,
                    FixedPrice = e.FixedPrice,
                })
                .OrderBy(e => e.FixedPrice)
                .ToListAsync();

            return prices;
        }

        public async Task<IEnumerable<CommentModel>> GetCommentsAsync(int? userId, int? appId, float? rating, int? orderBy)
        {
            //icon
            var comments = from comment in applicationContext.Comment
                           join user in applicationContext.User
                           on comment.UserId equals user.Id
                           where userId == null || comment.UserId == userId
                           where appId == null || comment.AppId == appId
                           where rating == null || comment.Rating == rating
                           select new CommentModel
                           {
                               Id = comment.Id,
                               UserId = comment.UserId,
                               UserName = user.Username,
                               Icon = user.Icon,
                               AppId = comment.AppId,
                               CommentText = comment.CommentText,
                               Date = comment.Date,
                               Rating = comment.Rating
                           };

            if (orderBy == 1)
            {
                comments = comments.OrderBy(e => e.Date);
            }
            else if (orderBy == 2)
            {
                comments = comments.OrderByDescending(e => e.Date);

            }
            else if (orderBy == 3)
            {
                comments = comments.OrderBy(e => e.Rating);
            }
            else if (orderBy == 4)
            {
                comments = comments.OrderByDescending(e => e.Rating);
            }
            //des

            return await comments.ToListAsync();
        }

        public async Task<bool> AddCommentAsync(CommentModel comment)
        {
            applicationContext.Comment.Add(new Comment
            {
                Id = comment.Id,
                AppId = comment.AppId,
                CommentText = comment.CommentText,
                Date = comment.Date,
                Rating = comment.Rating,
                UserId = comment.UserId
            });

            try
            {
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> EditCommentAsync(CommentModel comment)
        {
            var oldComment = applicationContext.Comment.FirstOrDefault(e => e.Id == comment.Id);

            oldComment.CommentText = comment.CommentText;
            oldComment.Rating = comment.Rating;

            try
            {
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> DeleteCommentAsync(int commentId)
        {
            applicationContext.Comment.Remove(applicationContext.Comment.FirstOrDefault(e => e.Id == commentId));

            try
            {
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<IEnumerable<CompanyModel>> GetCompaniesAsync()
        {
            var companies = await applicationContext.Company
                .Select(e => new CompanyModel
                {
                    Id = e.Id,
                    Name = e.Name,
                    Address = e.Address
                })
                .ToListAsync();

            return companies;
        }

        public async Task<IEnumerable<CategoryModel>> GetCategoriesAsync()
        {
            var categories = (from category in applicationContext.Category
                              select new CategoryModel
                              {
                                  Id = category.Id,
                                  Name = category.Name,
                                  Picture = category.CategoryPicture

                              }).ToListAsync();
            return await categories;
        }

        public async Task<AppModel> GetAppAsync(int Id)
        {
            var appInfo = (from app in applicationContext.App
                           join price in applicationContext.Pricicng
                           on app.PriceId equals price.Id
                           join company in applicationContext.Company
                           on app.CompanyId equals company.Id
                           select new AppModel
                           {
                               Id = app.Id,
                               AppType = app.AppType,
                               Title = app.Title,
                               Description = app.Description,
                               Status = app.Status,
                               Company = new CompanyModel()
                               {
                                   Id = company.Id,
                                   Name = company.Name,
                                   //Address = company.Address,
                               },
                               Rating = app.Rating,
                               Price = price.FixedPrice,
                               ReleaseDate = app.ReleaseDate,
                               Pictures = from picture in applicationContext.Picture
                                          where app.Id == picture.AppId
                                          orderby picture.PictureOrder
                                          select new PictureModel()
                                          {
                                              Id = picture.Id,
                                              //AppId = picture.Id,
                                              PictureOrder = picture.PictureOrder,
                                              PictureFile = picture.PictureFile,
                                          },

                               Icon = app.Icon,
                               File = app.File,
                               GenresName = from appHasGenre in applicationContext.AppHasGenre.Where(e => e.AppId == app.Id)
                                            join genre in applicationContext.Genre
                                            on appHasGenre.GenreId equals genre.Id
                                            select genre.Name,
                               PlatformsName = from appHasPlatform in applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id)
                                               join platform in applicationContext.Platform
                                               on appHasPlatform.PlatformId equals platform.Id
                                               select platform.Name,
                               LanguagesName = from appHasLanguage in applicationContext.AppHasLanguage.Where(e => e.AppId == app.Id)
                                               join language in applicationContext.Language
                                               on appHasLanguage.LanguageId equals language.Id
                                               select language.Name,


                           }).FirstOrDefaultAsync(e => e.Id == Id);


            return await appInfo;
        }

        public async Task<string> BuyAppsAsync(List<int> appIds, int userId)
        {
            foreach (var item in appIds)
            {
                var newApp = new UserHasApp
                {
                    AppId = item,
                    UserId = userId
                };

                applicationContext.UserHasApp.Add(newApp);
            }

            await applicationContext.SaveChangesAsync();
            return "Приложения добавлены на аккаунт";
        }

        public async Task<bool> AddAppAsync(AppModel app)
        {
            App appInDb = new App()
            {
                AppType = app.AppType,
                Title = app.Title,
                Description = app.Description,
                Status = app.Status,
                ReleaseDate = app.ReleaseDate,
                CompanyId = app.Company.Id,
                Rating = app.Rating,
                PriceId = app.Price,
                Icon = app.Icon,
                File = app.File
            };
            applicationContext.App.Add(appInDb);
            try
            {
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> EditAppAsync(AppModel app)
        {
            var appInDb = await applicationContext.App
                          .FirstOrDefaultAsync(e => e.Id == app.Id);

            appInDb.AppType = app.AppType;
            appInDb.Title = app.Title;
            appInDb.Description = app.Description;
            appInDb.Status = app.Status;
            appInDb.ReleaseDate = app.ReleaseDate;
            appInDb.CompanyId = app.Company.Id;
            appInDb.Rating = app.Rating;
            appInDb.PriceId = app.Price;
            appInDb.Icon = app.Icon;
            appInDb.File = app.File;

            applicationContext.App.Update(appInDb);
            try
            {
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> DeleteAppAsync(int appId)
        {
            try
            {
                applicationContext.App.Remove(applicationContext.App.First(e => e.Id == appId));
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<byte[]> DownloadApp(int appId)
        {
            App app = await applicationContext.App.FirstOrDefaultAsync(e => e.Id == appId);
            return app.File;
        }

        public async Task<bool> AddAppToLibrary(int userId, int appId)
        {
            try
            {
                applicationContext.UserHasApp.Add(new UserHasApp { AppId = appId, UserId = userId });
                await applicationContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<IEnumerable<GenreModel>> GetGenresAsync()
        {
            var genres = await applicationContext.Genre
                .Select(e => new GenreModel
                {
                    Id = e.Id,
                    Name = e.Name,
                })
                .ToListAsync();

            return genres;
        }

        //public async Task<IEnumerable<AppListModel>> GetAppListAsync(
        //    int? appType,
        //    DateTime? releaseDate,
        //    int? companyId,
        //    float? rating,
        //    int? priceId,
        //    int? genreId,
        //    int? platformId,
        //    int? languageId,
        //    int? categoryId,
        //    string title = "")
        //{
        //    var appList = from app in applicationContext.App
        //                  join price in applicationContext.Pricicng
        //                  on app.PriceId equals price.Id
        //                  join company in applicationContext.Company
        //                  on app.CompanyId equals company.Id
        //                  where appType == null || app.AppType == appType
        //                  where title == "" || app.Title == title
        //                  where releaseDate == null || app.ReleaseDate == releaseDate
        //                  where companyId == null || app.CompanyId == companyId
        //                  where rating == null || app.Rating == rating
        //                  where priceId == null || app.PriceId == priceId
        //                  select new AppListModel
        //                  {
        //                      Id = app.Id,
        //                      Title = app.Title,
        //                      AppType = app.AppType,
        //                      Description = app.Description,
        //                      ReleaseDate = app.ReleaseDate,
        //                      CompanyName = company.Name,
        //                      Rating = app.Rating,
        //                      Price = price.FixedPrice,
        //                      GenresName = from appHasGenre in applicationContext.AppHasGenre.Where(e => e.AppId == app.Id)
        //                                   join genre in applicationContext.Genre
        //                                   on appHasGenre.GenreId equals genre.Id
        //                                   select genre.Name,
        //                      PlatformsName = from appHasPlatform in applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id)
        //                                      join platform in applicationContext.Platform
        //                                      on appHasPlatform.PlatformId equals platform.Id
        //                                      select platform.Name,
        //                      LanguagesName = from appHasLanguage in applicationContext.AppHasLanguage.Where(e => e.AppId == app.Id)
        //                                      join language in applicationContext.Language
        //                                      on appHasLanguage.LanguageId equals language.Id
        //                                      select language.Name,
        //                      CategoriesName = from appHasCategory in applicationContext.AppHasCategory.Where(e => e.AppId == app.Id)
        //                                       join category in applicationContext.Category
        //                                       on appHasCategory.CategoryId equals category.Id
        //                                       select category.Name,


        //                  };

        //    if (genreId != null)
        //    {
        //        appList = from app in appList
        //                  join appHasGenre in applicationContext.AppHasGenre.Where(e => genreId == null || e.GenreId == genreId)
        //                  on app.Id equals appHasGenre.AppId
        //                  select app;
        //    }
        //    if (platformId != null)
        //    {
        //        appList = from app in appList
        //                  join appHasPlatform in applicationContext.AppHasPlatform.Where(e => platformId == null || e.PlatformId == platformId)
        //                  on app.Id equals appHasPlatform.AppId
        //                  select app;
        //    }
        //    if (languageId != null)
        //    {
        //        appList = from app in appList
        //                  join appHasLanguage in applicationContext.AppHasLanguage.Where(e => languageId == null || e.LanguageId == languageId)
        //                  on app.Id equals appHasLanguage.AppId
        //                  select app;
        //    }
        //    if (categoryId != null)
        //    {
        //        appList = from app in appList
        //                  join appHasCategory in applicationContext.AppHasCategory.Where(e => categoryId == null || e.CategoryId == categoryId)
        //                  on app.Id equals appHasCategory.AppId
        //                  select app;
        //    }

        //    return await appList.Distinct().AsNoTracking().ToListAsync();
        //}

        public async Task<IEnumerable<AppListModel>> GetAppListAsync(GetAppListParamsModel parameters)
        {
            var appList = from app in applicationContext.App
                          join price in applicationContext.Pricicng
                          on app.PriceId equals price.Id
                          join company in applicationContext.Company
                          on app.CompanyId equals company.Id
                          where parameters.AppTypeIds == null || parameters.AppTypeIds.Contains(app.AppType)
                          where parameters.Title == null || app.Title == parameters.Title
                          where parameters.ReleaseDate == null || app.ReleaseDate == parameters.ReleaseDate
                          where parameters.CompanyId == null || app.CompanyId == parameters.CompanyId
                          where parameters.Rating == null || app.Rating == parameters.Rating
                          where parameters.PriceIds == null || parameters.PriceIds.Contains(app.PriceId)
                          where parameters.CategoryIds == null || applicationContext.AppHasCategory.Where(e => e.AppId == app.Id && parameters.CategoryIds.Contains(e.CategoryId)).Any()
                          where parameters.PlatformIds == null || applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id && parameters.PlatformIds.Contains(e.PlatformId)).Any()
                          where parameters.LanguageIds == null || applicationContext.AppHasLanguage.Where(e => e.AppId == app.Id && parameters.LanguageIds.Contains(e.LanguageId)).Any()
                          where parameters.GenreIds == null || applicationContext.AppHasGenre.Where(e => e.AppId == app.Id && parameters.GenreIds.Contains(e.GenreId)).Any()
                          select new AppListModel
                          {
                              Id = app.Id,
                              Title = app.Title,
                              AppType = app.AppType,
                              Description = app.Description,
                              ReleaseDate = app.ReleaseDate,
                              CompanyName = company.Name,
                              Rating = app.Rating,
                              Price = price.FixedPrice,
                              Picture = app.Picture,
                              Icon = app.Icon,

                              GenresName = from appHasGenre in applicationContext.AppHasGenre.Where(e => e.AppId == app.Id)
                                           join genre in applicationContext.Genre
                                           on appHasGenre.GenreId equals genre.Id
                                           select genre.Name,
                              PlatformsName = from appHasPlatform in applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id)
                                              join platform in applicationContext.Platform
                                              on appHasPlatform.PlatformId equals platform.Id
                                              select platform.Name,
                              LanguagesName = from appHasLanguage in applicationContext.AppHasLanguage.Where(e => e.AppId == app.Id)
                                              join language in applicationContext.Language
                                              on appHasLanguage.LanguageId equals language.Id
                                              select language.Name,
                              CategoriesName = from appHasCategory in applicationContext.AppHasCategory.Where(e => e.AppId == app.Id)
                                               join category in applicationContext.Category
                                               on appHasCategory.CategoryId equals category.Id
                                               select category.Name,
                          };
            /*
            if (genreId != null)
            {
                appList = from app in appList
                          join appHasGenre in applicationContext.AppHasGenre.Where(e => genreId == null || e.GenreId == genreId)
                          on app.Id equals appHasGenre.AppId
                          select app;
            }
            if (platformId != null)
            {
                appList = from app in appList
                          join appHasPlatform in applicationContext.AppHasPlatform.Where(e => platformId == null || e.PlatformId == platformId)
                          on app.Id equals appHasPlatform.AppId
                          select app;
            }
            if (languageId != null)
            {
                appList = from app in appList
                          join appHasLanguage in applicationContext.AppHasLanguage.Where(e => languageId == null || e.LanguageId == languageId)
                          on app.Id equals appHasLanguage.AppId
                          select app;
            }
            if (categoryId != null)
            {
                appList = from app in appList
                          join appHasCategory in applicationContext.AppHasCategory.Where(e => categoryId == null || e.CategoryId == categoryId)
                          on app.Id equals appHasCategory.AppId
                          select app;
            }
            */
            var result = await appList.AsNoTracking().ToListAsync();
            return result;
        }

        public async Task<IEnumerable<CardModel>> GetCardInformationAsync(int cardTag)
        {

            var cardInfo = (from card in applicationContext.Card
                            join app in applicationContext.App
                            on card.AppId equals app.Id
                            join pricing in applicationContext.Pricicng
                            on app.PriceId equals pricing.Id
                            //join picture in applicationContext.Picture
                            //on app.MainPictureId equals picture.Id
                            where card.CardTag == cardTag
                            orderby card.CardOrder
                            select new CardModel
                            {
                                Id = app.Id,
                                Title = app.Title,
                                Description = card.Description,
                                SubDescription = card.SubDescription,
                                Price = pricing.FixedPrice,
                                Picture = card.Picture,
                                Platforms = from appHasPlatform in applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id)
                                            join platform in applicationContext.Platform
                                            on appHasPlatform.PlatformId equals platform.Id
                                            select new PlatformModel
                                            {
                                                Id = platform.Id,
                                                Name = platform.Name,
                                                Icon = platform.Icon
                                            },
                                Genres = from appHasGenres in applicationContext.AppHasGenre.Where(e => e.AppId == app.Id)
                                         join genre in applicationContext.Genre
                                         on appHasGenres.GenreId equals genre.Id
                                         select new GenreModel
                                         {
                                             Id = genre.Id,
                                             Name = genre.Name
                                         }
                            }).ToListAsync();
            return await cardInfo;

        }

        public async Task<UserModel> GetUserInformationAsync(int userId)
        {
            var userInfo = (from user in applicationContext.User
                            select new UserModel
                            {
                                Id = user.Id,
                                Username = user.Username,
                                Email = user.Email,
                                Icon = user.Icon,
                            })
                            .FirstOrDefaultAsync(e => e.Id == userId);

            return await userInfo;
        }

        public async Task<List<AppListModel>> GetUserLibraryAsync(int userId)
        {
            var result = await (from app in applicationContext.App
                                join userHasApp in applicationContext.UserHasApp.Where(e => e.UserId == userId)
                                on app.Id equals userHasApp.AppId
                                join price in applicationContext.Pricicng
                                on app.PriceId equals price.Id
                                join company in applicationContext.Company
                                on app.CompanyId equals company.Id
                                select new AppListModel
                                {
                                    Id = app.Id,
                                    Title = app.Title,
                                    AppType = app.AppType,
                                    Description = app.Description,
                                    ReleaseDate = app.ReleaseDate,
                                    CompanyName = company.Name,
                                    Rating = app.Rating,
                                    Price = price.FixedPrice,
                                    GenresName = from appHasGenre in applicationContext.AppHasGenre.Where(e => e.AppId == app.Id)
                                                 join genre in applicationContext.Genre
                                                 on appHasGenre.GenreId equals genre.Id
                                                 select genre.Name,
                                    PlatformsName = from appHasPlatform in applicationContext.AppHasPlatform.Where(e => e.AppId == app.Id)
                                                    join platform in applicationContext.Platform
                                                    on appHasPlatform.PlatformId equals platform.Id
                                                    select platform.Name
                                })
                                .ToListAsync();
            return result;
        }
    }
}
