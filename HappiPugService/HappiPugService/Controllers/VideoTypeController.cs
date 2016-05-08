using HappiPugCloudService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugService.Controllers
{
    public class VideoTypeController : ApiController
    {
        happipugCloudEntities hpobj = new happipugCloudEntities();

        // GET api/video
        public IEnumerable<VideoType> Get()
        {
            return hpobj.VideoTypes;
        }

        // GET api/video/5
        public VideoType Get(int id)
        {
            return hpobj.VideoTypes.First(x => x.Id == id);
        }

        // POST api/video
        public void Post([FromBody]VideoType item)
        {
            VideoType vidObj = new VideoType() { TypeName = item.TypeName };
            hpobj.VideoTypes.Add(vidObj);

            hpobj.SaveChanges();
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]VideoType item)
        {
            VideoType vidObj = hpobj.VideoTypes.First(x => x.Id == id);
            vidObj.TypeName = item.TypeName;
           
            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            VideoType vidObj = hpobj.VideoTypes.First(x => x.Id == id);
            hpobj.VideoTypes.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
