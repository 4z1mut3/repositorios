using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Repositorios.Models;
using System.Text.Json;
using System.Net.Http;
using System.Net;
using System.IO;
using Newtonsoft.Json;
using System.Data;

namespace Repositorios.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class usercontroller : ControllerBase
    {

        //var objetoGet = ;
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<usercontroller> _logger;

        public usercontroller(ILogger<usercontroller> logger)
        {
            _logger = logger;
        }


   
        //Listar dados de usuario /4z1mut3
        [HttpGet("usuario")]
        public async Task<String> dadosUsuario()
        {
            var requisicaoWeb = WebRequest.CreateHttp("https://api.github.com/users/4z1mut3");
            requisicaoWeb.Method = "GET";
            requisicaoWeb.UserAgent = "RequisicaoWebDemo";
            using (var resposta = requisicaoWeb.GetResponse())
            {
                var streamDados = resposta.GetResponseStream();
                StreamReader reader = new StreamReader(streamDados);
                object objResponse = reader.ReadToEnd();
                var jsonResponse = JsonConvert.DeserializeObject(objResponse.ToString());
                dynamic arrayResponse = JsonConvert.DeserializeObject(objResponse.ToString());

                return jsonResponse.ToString();
            }

        }
        //Listar repositorios de usuario /4z1mut3
        [HttpGet("repositorios")]
        public async Task<String> ListaRepositorios()
        {
            var requisicaoWeb = WebRequest.CreateHttp("https://api.github.com/users/4z1mut3/repos");
            requisicaoWeb.Method = "GET";
            requisicaoWeb.UserAgent = "RequisicaoWebDemo";
            using (var resposta = requisicaoWeb.GetResponse())
            {
                var streamDados = resposta.GetResponseStream();
                StreamReader reader = new StreamReader(streamDados);
                object objResponse = reader.ReadToEnd();
                var jsonResponse = JsonConvert.DeserializeObject(objResponse.ToString());
                dynamic arrayResponse = JsonConvert.DeserializeObject(objResponse.ToString());

                return jsonResponse.ToString();
            }
        }       
    }
}
