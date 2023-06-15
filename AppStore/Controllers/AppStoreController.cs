using Common.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppStoreService.Interfaces;
using Microsoft.AspNetCore.Authorization;
using System.Diagnostics;

namespace AppStore.Controllers
{
    /// <summary>
    /// AppStore контроллер
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AppStoreController : ControllerBase
    {
        readonly IAppStoreService appStoreService;

        /// <summary>
        /// Конструктор DI
        /// </summary>
        public AppStoreController(IAppStoreService appStoreService)
        {
            this.appStoreService = appStoreService;
        }


        /// <summary>
        /// Получение всех платформ
        /// </summary>
        /// <returns>список платформ</returns>
        [HttpGet("GetPlatformsAsync")]
        public async Task<IEnumerable<PlatformModel>> GetPlatformsAsync()
        {
            try
            {
                return await appStoreService.GetPlatformsAsync();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message); 
                throw;
            }
        }
        /// <summary>
        /// Получение всех языков
        /// </summary>
        /// <returns>список языков</returns>
        [HttpGet("GetLanguagesAsync")]
        public async Task<IEnumerable<LanguageModel>> GetLanguagesAsync()
        {
            try
            {
                return await appStoreService.GetLanguagesAsync();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }

        /// <summary>
        /// Получение всех фиксированных цен
        /// </summary>
        /// <returns>Список фиксированных цен</returns>
        [HttpGet("GetPricesAsync")]
        public async Task<IEnumerable<PriceModel>> GetPricesAsync()
        {
            try
            {
                return await appStoreService.GetPricesAsync();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }


        /// <summary>
        /// Получение комментариев
        /// </summary>
        /// <param name="userId">Идентификатр пользователя</param>
        /// <param name="appId">Идентификатор приложения</param>
        /// <param name="rating">Рейтинг комментариев</param>
        /// <param name="orderBy">Сортировать по: </param>
        /// <returns>Список комментариев</returns>
        [HttpGet("GetCommentsAsync")]
        public async Task<IEnumerable<CommentModel>> GetCommentsAsync(int? userId, int? appId, int? rating, int? orderBy) => await appStoreService.GetCommentsAsync(userId, appId, rating, orderBy);

        /// <summary>
        /// Список приложений
        /// </summary>
        /// <param name="parameters">Модель с параметрами метода</param>
        /// <returns></returns>
        [HttpPost("GetAppListAsync")]
        public async Task<IEnumerable<AppListModel>> GetAppListAsync(GetAppListParamsModel parameters) => await appStoreService.GetAppListAsync(parameters);

        /// <summary>
        /// Добавление комментария
        /// </summary>
        /// <param name="comment">Комментарий</param>
        /// <returns></returns>
        [Authorize(Roles = "Moderator, User, Developer")]
        [HttpPost("AddCommentAsync")]
        public async Task<bool> AddCommentAsync(CommentModel comment) => await appStoreService.AddCommentAsync(comment);

        /// <summary>
        /// Редактирование комментария
        /// </summary>
        /// <param name="comment">Комментарий</param>
        /// <returns></returns>
        [Authorize(Roles = "Moderator, User, Developer")]
        [HttpPost("EditCommentAsync")]
        public async Task<bool> EditCommentAsync(CommentModel comment) => await appStoreService.EditCommentAsync(comment);

        /// <summary>
        /// Удаление комментария
        /// </summary>
        /// <param name="commentId">Комментарий</param>
        /// <returns></returns>
        [Authorize(Roles = "Moderator, User, Developer")]
        [HttpPost("DeleteCommentAsync")]
        public async Task<bool> DeleteCommentAsync(int commentId) => await appStoreService.DeleteCommentAsync(commentId);

        /// <summary>
        /// Получение компании
        /// </summary>
        /// <returns>Модель компании</returns>
        [HttpGet("GetCompaniesAsync")]
        public async Task<IEnumerable<CompanyModel>> GetCompaniesAsync() => await appStoreService.GetCompaniesAsync();

        /// <summary>
        /// Получение всех жанров
        /// </summary>
        /// <returns>Модель жанра</returns>
        [HttpGet("GetGenresAsync")]
        public async Task<IEnumerable<GenreModel>> GetGenresAsync() => await appStoreService.GetGenresAsync();

        /// <summary>
        /// Получение всех категорий
        /// </summary>
        /// <returns>Модель категории</returns>
        [HttpGet("GetCategoriesAsync")]
        public async Task<IEnumerable<CategoryModel>> GetCategoriesAsync() => await appStoreService.GetCategoriesAsync();

        /// <summary>
        /// Получение информации для карточек по cardTag
        /// </summary>
        /// <param name="cardTag">Тэг карточки, обозначающий в каком разделе она находится</param>
        /// <returns>Модель карточки</returns>
        [HttpGet("GetCardInformationAsync")]
        public async Task<IEnumerable<CardModel>> GetCardInformationAsync(int cardTag) => await appStoreService.GetCardInformationAsync(cardTag);

        /// <summary>
        /// Получение информации одного пользователя
        /// </summary>
        /// <param name="userId">Идентификатор пользователя</param>
        /// <returns>Модель пользователя</returns>
        [HttpGet("GetUserInformationAsync")]
        public async Task<UserModel> GetUserInformationAsync(int userId) => await appStoreService.GetUserInformationAsync(userId);

        /// <summary>
        /// Получение информации о приложении по идентификатору
        /// </summary>
        /// <param name="appId">Идентификатор приложения</param>
        /// <returns>Модель приложения</returns>
        [HttpGet("GetAppAsync")]
        public async Task<AppModel> GetApp(int appId) => await appStoreService.GetAppAsync(appId);

        /// <summary>
        /// Приобритение списка приложений для аккаунта
        /// </summary>
        /// <param name="appIds">Список выбранных приложений</param>
        /// <param name="userId">Идентификатор пользователя</param>
        /// <returns>Статус и сообщение</returns>
        [HttpPost("BuyAppsAsync")]
        public async Task<IActionResult> BuyAppsAsync(List<int> appIds, int userId)
        {
            try
            {
                var result = await appStoreService.BuyAppsAsync(appIds, userId);
                return Ok(new { success = true, message = result });
            }
            catch (Exception e)
            {
                return Problem(detail: e.Message);
            }
        }

        /// <summary>
        /// Получение списка приложений из библиотеки пользователя
        /// </summary>
        /// <param name="userId">Идентификатор пользователя</param>
        /// <returns>Статус и сообщение</returns>
        [HttpPost("GetUserLibraryAsync")]
        public async Task<IActionResult> GetUserLibraryAsync( int userId)
        {
            try
            {
                var result = await appStoreService.GetUserLibraryAsync(userId);
                return Ok(new { success = true, message = result });
            }
            catch (Exception e)
            {
                return Problem(detail: e.Message);
            }
        }

        /// <summary>
        /// Скачивание приложения
        /// </summary>
        /// <param name="appId">Идентификатор приложения</param>
        /// <returns>Массив байтов</returns>
        [HttpGet("DownloadApp")]
        public async Task<IActionResult> DownloadApp(int appId)
        {
            try
            {
                var result = await appStoreService.DownloadApp(appId);
                return Ok(result);
            }
            catch (Exception e)
            {
                return Problem(detail: e.Message);
            }
        }
    }
}
    