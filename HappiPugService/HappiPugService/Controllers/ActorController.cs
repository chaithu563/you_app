using HappiPugCloudService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugService.Controllers
{
    public class ActorController : ApiController
    {
        happipugCloudEntities hpobj = new happipugCloudEntities();
        // GET api/video
        public IEnumerable<Actor> Get()
        {
            return hpobj.Actors;
        }

        // GET api/video/5
        public Actor Get(int id)
        {
            return hpobj.Actors.First(x => x.Id == id);
        }

        // POST api/video
        public void Post([FromBody]Actor item)
        {
            Actor Actor = new Actor() { ActorTypeId = item.ActorTypeId, ActorName=item.ActorName,LanguageId=item.LanguageId };
            hpobj.Actors.Add(Actor);

            hpobj.SaveChanges();
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]Actor item)
        {
            Actor vidObj = hpobj.Actors.First(x => x.Id == id);
            vidObj.ActorName = item.ActorName;
            vidObj.LanguageId = item.LanguageId;
            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            Actor vidObj = hpobj.Actors.First(x => x.Id == id);
            hpobj.Actors.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
