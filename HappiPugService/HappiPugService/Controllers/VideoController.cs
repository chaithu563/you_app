using HappiPugCloudService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
namespace HappiPugCloudService.Controllers
{
    public class VideoController : ApiController
    {

        happiPugCloudEntities hpobj = new happiPugCloudEntities();

        // GET api/video
        public IEnumerable<Video> Get()
        {
            return hpobj.Videos;
        }

        // GET api/video/5
        public Video Get(string id)
        {
            Video ob = new Video();
            try
            {

                ob= hpobj.Videos.First(x => x.YoutubeID.Equals(id)); ;
            }
            catch(Exception ex)
            {
                ob = null;
             
            }
            return ob;
        }

        // POST api/video
        public Video Post([FromBody]Video item)
        {
            Video vidObj = new Video() { VideoName = item.VideoName, YoutubeID = item.YoutubeID, LanguageId = item.LanguageId, VideoTypeId = item.VideoTypeId };

            hpobj.Videos.Add(vidObj);

            hpobj.SaveChanges();
            return vidObj;
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]Video item)
        {
            Video vidObj = hpobj.Videos.First(x => x.Id == id);
            vidObj.VideoName = item.VideoName;
            vidObj.LanguageId = item.LanguageId;
            vidObj.VideoTypeId = item.VideoTypeId;
            vidObj.YoutubeID = item.YoutubeID;
            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            Video vidObj = hpobj.Videos.First(x => x.Id == id);
            hpobj.Videos.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
