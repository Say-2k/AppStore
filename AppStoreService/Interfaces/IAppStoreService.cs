using Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppStoreService.Interfaces
{
    public interface IAppStoreService
    {
        //связанное с приложением
        Task<IEnumerable<AppListModel>> GetAppListAsync(GetAppListParamsModel parameters);


        Task<AppModel> GetAppAsync(int Id);
        Task<string> BuyAppsAsync(List<int> appIds, int userId);
        Task<bool> AddAppAsync(AppModel app);
        Task<bool> EditAppAsync(AppModel app);
        Task<bool> DeleteAppAsync(int appId);

        Task<List<AppListModel>> GetUserLibraryAsync(int userId);

        /*
        //связанное с модерацией
        Task<IEnumerable<UserModel>> OnModeration();
        Task<IEnumerable<UserModel>> ModerationDone();
        */
        Task<byte[]> DownloadApp(int appId);
        /*
        Task<IEnumerable<UserModel>> DeleteAppFromLibrary();

        //связанное с комментарием
        */
        Task<IEnumerable<CommentModel>> GetCommentsAsync(int? userId, int? appId, float? rating, int? orderBy);

        Task<bool> AddCommentAsync(CommentModel comment);

        Task<bool> EditCommentAsync(CommentModel comment);

        Task<bool> DeleteCommentAsync(int commentId);

        Task<IEnumerable<GenreModel>> GetGenresAsync();

        Task<IEnumerable<PlatformModel>> GetPlatformsAsync();

        Task<IEnumerable<LanguageModel>> GetLanguagesAsync();

        Task<IEnumerable<PriceModel>> GetPricesAsync();


        Task<IEnumerable<CompanyModel>> GetCompaniesAsync();
        //Task<IEnumerable<AppModel>> GetCompanyApps();

        Task<IEnumerable<CategoryModel>> GetCategoriesAsync();

        Task<UserModel> GetUserInformationAsync( int userId);

        //Task<IEnumerable<RoleModel>> FindAppRating();

        Task<IEnumerable<CardModel>> GetCardInformationAsync(int cardTag);


    }
}   