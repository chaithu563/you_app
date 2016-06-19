using HappiPugService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugCloudService.Controllers
{
    public class LanguageController : ApiController
    {
        happiPugCloudEntities hpobj = new happiPugCloudEntities();
        // GET api/video
        public IEnumerable<Language> Get()
        {
            return hpobj.Languages;
        }

        // GET api/video/5
        public Language Get(int id)
        {
            return hpobj.Languages.First(x => x.Id == id);
        }

        // POST api/video
        public void Post([FromBody]Language item)
        {
            Language vidObj = new Language() { Name = item.Name };
            hpobj.Languages.Add(vidObj);

            hpobj.SaveChanges();
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]Language item)
        {
            Language vidObj = hpobj.Languages.First(x => x.Id == id);
            vidObj.Name = item.Name ;

            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            Language vidObj = hpobj.Languages.First(x => x.Id == id);
            hpobj.Languages.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
