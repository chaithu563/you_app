using HappiPugService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugCloudService.Controllers
{
    public class ActorTypeController : ApiController
    {
        happiPugCloudEntities hpobj = new happiPugCloudEntities();
        // GET api/video
        public IEnumerable<ActorType> Get()
        {
            return hpobj.ActorTypes;
        }

        // GET api/video/5
        public ActorType Get(int id)
        {
            return hpobj.ActorTypes.First(x => x.Id == id);
        }

        // POST api/video
        public void Post([FromBody]ActorType item)
        {
            ActorType ActorType = new ActorType() { TypeName = item.TypeName };
            hpobj.ActorTypes.Add(ActorType);

            hpobj.SaveChanges();
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]ActorType item)
        {
            ActorType vidObj = hpobj.ActorTypes.First(x => x.Id == id);
            vidObj.TypeName = item.TypeName;

            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            ActorType vidObj = hpobj.ActorTypes.First(x => x.Id == id);
            hpobj.ActorTypes.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
