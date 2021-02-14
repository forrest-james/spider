using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class MainController
        : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index() => View();
    }
}