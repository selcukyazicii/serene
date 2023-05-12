using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace serene.Administration.Pages
{
    [PageAuthorize(typeof(RoleRow))]
    public class RoleController : Controller
    {
        [Route("Administration/Role")]
        public ActionResult Index()
        {
            return this.GridPage("@/Administration/Role/RolePage",
                RoleRow.Fields.PageTitle());
        }
    }
}