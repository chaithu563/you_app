using HappiPugCloudService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HappiPugCloudService.Controllers
{
    public class VideoShopItemController : ApiController
    {
        happipugCloudEntities hpobj = new happipugCloudEntities();

        // GET api/video
        public IEnumerable<VideoShopItem> Get()
        {
            return hpobj.VideoShopItems;
        }

        // GET api/video/5
        public VideoShopItem Get(int id)
        {
            return hpobj.VideoShopItems.First(x => x.Id == id);
        }

        // POST api/video
        public void Post([FromBody]VideoShopItem item)
        {
            VideoShopItem vidObj = new VideoShopItem() { ProductHandle = item.ProductHandle, ptop = item.ptop, pleft = item.pleft, starttime = item.starttime,endtime=item.endtime };

            hpobj.VideoShopItems.Add(vidObj);

            hpobj.SaveChanges();
        }

        // PUT api/video/5
        public void Put(int id, [FromBody]VideoShopItem item)
        {
            VideoShopItem vidObj = hpobj.VideoShopItems.First(x => x.Id == id);
            vidObj.ProductHandle = item.ProductHandle;
            vidObj.ptop = item.ptop;
            vidObj.pleft = item.pleft;
            vidObj.starttime = item.starttime;
            vidObj.endtime = item.endtime;
            hpobj.SaveChanges();

        }

        // DELETE api/video/5
        public void Delete(int id)
        {
            VideoShopItem vidObj = hpobj.VideoShopItems.First(x => x.Id == id);
            hpobj.VideoShopItems.Remove(vidObj);
            hpobj.SaveChanges();
        }
    }
}
