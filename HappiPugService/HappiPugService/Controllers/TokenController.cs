using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace HappiPugCloudService.Controllers
{
    public class TokenController : ApiController
    {

			public dynamic Get()
			{
				
                //string pathToPrivateKey = "";
                //string variable="";
				// certificate
				try
				{
                    // variable = Environment.GetEnvironmentVariable("HOME").ToString();


                    //string privateKeyCert = "HappiePug-3c5325296563.p12";
                    //string appRoot = Environment.GetEnvironmentVariable("RoleRoot");
                    //pathToPrivateKey = Path.Combine(variable + @"\", string.Format(@"\happipug.scm.azurewebsites.net\\wwwroot\\{0}", privateKeyCert));

                    // var certificate = new X509Certificate2(@"D:\home\site\wwwroot\Controllers\HappiePug-3c5325296563.p12", "notasecret");
                   // var certificate = new X509Certificate2(@"D:\local\VirtualDirectory0\site\wwwroot\Controllers\HappiePug-3c5325296563.p12", "notasecret");
                    var certificate = new X509Certificate2(System.Web.Hosting.HostingEnvironment.MapPath("~//Controllers/HappiePug-3c5325296563.p12"), "notasecret");

                   // var certificate = new X509Certificate2(@"C:\chaitanya\raja\myshop\shop_app\HappiPugCloudService\HappiPugCloudService\Controllers\HappiePug-3c5325296563.p12", "notasecret");

					// header
					var header = new {typ = "JWT", alg = "RS256"};

					// claimset
					var times = GetExpiryAndIssueDate();
					var claimset = new
					{
						iss = "happiepug@inlaid-backbone-120410.iam.gserviceaccount.com",
						scope = "https://www.googleapis.com/auth/youtube",
						//scope = "https://www.googleapis.com/auth/devstorage.readonly",
						aud = "https://www.googleapis.com/oauth2/v4/token",
						iat = times[0],
						exp = times[1],
					};

					JavaScriptSerializer ser = new JavaScriptSerializer();

					// encoded header
					var headerSerialized = ser.Serialize(header);
					var headerBytes = Encoding.UTF8.GetBytes(headerSerialized);
					var headerEncoded = Convert.ToBase64String(headerBytes);

					// encoded claimset
					var claimsetSerialized = ser.Serialize(claimset);
					var claimsetBytes = Encoding.UTF8.GetBytes(claimsetSerialized);
					var claimsetEncoded = Convert.ToBase64String(claimsetBytes);

					// input
					var input = headerEncoded + "." + claimsetEncoded;
					var inputBytes = Encoding.UTF8.GetBytes(input);

					// signiture
					var rsa = certificate.PrivateKey as RSACryptoServiceProvider;
					var cspParam = new CspParameters
					{
						KeyContainerName = rsa.CspKeyContainerInfo.KeyContainerName,
						KeyNumber = rsa.CspKeyContainerInfo.KeyNumber == KeyNumber.Exchange ? 1 : 2
					};
					var aescsp = new RSACryptoServiceProvider(cspParam) {PersistKeyInCsp = false};
					var signatureBytes = aescsp.SignData(inputBytes, "SHA256");
					var signatureEncoded = Convert.ToBase64String(signatureBytes);

					// jwt
					var jwt = headerEncoded + "." + claimsetEncoded + "." + signatureEncoded;

					var client = new WebClient();
					client.Encoding = Encoding.UTF8;
					//var uri = "https://accounts.google.com/o/oauth2/token";
					var uri = "https://www.googleapis.com/oauth2/v4/token";
					var content = new NameValueCollection();

					content["assertion"] = jwt;
					content["grant_type"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";

					string response = Encoding.UTF8.GetString(client.UploadValues(uri, "POST", content));

					var result = ser.Deserialize<dynamic>(response);
                    return result;
				}
				catch(Exception ex)
				{
                   // result = ex.;
                    return ex.ToString() ;
				}

				//return result;
			}

	    public string Get(int a)
	    {
		    return "chaitanya";

	    }
			private static int[] GetExpiryAndIssueDate()
			{
				var utc0 = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
				var issueTime = DateTime.UtcNow;

				var iat = (int)issueTime.Subtract(utc0).TotalSeconds;
				var exp = (int)issueTime.AddMinutes(55).Subtract(utc0).TotalSeconds;

				return new[] { iat, exp };
			}
    }
}
