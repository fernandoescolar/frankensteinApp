﻿using Microsoft.AspNetCore.Mvc;

namespace FrankensteinApp.Controllers
{
    public class HomeController : Controller 
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
