using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GestionProcesosConocer.Controllers
{
    using System.Web.Http;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using GestionProcesosConocer.Models;

    [RoutePrefix("api/Roles")]
    public class RolesController : ApiController
    {
        private readonly ApplicationDbContext context;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<ApplicationUser> userManager;

        public RolesController()
        {
            context = new ApplicationDbContext();
            roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
        }

        // ✅ Crear un rol
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateRole(RoleBindingModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!roleManager.RoleExists(model.RoleName))
            {
                var result = roleManager.Create(new IdentityRole(model.RoleName));
                if (!result.Succeeded)
                    return BadRequest("No se pudo crear el rol");
            }

            return Ok($"Rol '{model.RoleName}' creado correctamente.");
        }

        // ✅ Asignar un rol a un usuario
        [HttpPost]
        [Route("Assign")]
        public IHttpActionResult AssignRole(AssignRoleBindingModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = userManager.FindByEmail(model.Email);
            if (user == null)
                return BadRequest("Usuario no encontrado");

            var result = userManager.AddToRole(user.Id, model.RoleName);
            if (!result.Succeeded)
                return BadRequest("No se pudo asignar el rol");

            return Ok($"Rol '{model.RoleName}' asignado al usuario {model.Email}.");
        }
    }

}