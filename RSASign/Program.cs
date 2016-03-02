using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace RSASign
{

	public  class DigitalSignature
	{
		public const string SCOPE_ANALYTICS_READONLY = "https://www.googleapis.com/auth/analytics.readonly";

		public static dynamic GetAccessToken()
		{
			// certificate
			var certificate = new X509Certificate2(@"D:\youtube\RSASign\HappiePug-bbca6989906d.p12", "notasecret");

			// header
			var header = new { typ = "JWT", alg = "RS256" };

			// claimset
			var times = GetExpiryAndIssueDate();
			var claimset = new
			{
				iss = "happiepug@inlaid-backbone-120410.iam.gserviceaccount.com",
				scope = "https://www.googleapis.com/auth/prediction",
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
			var aescsp = new RSACryptoServiceProvider(cspParam) { PersistKeyInCsp = false };
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

		private static int[] GetExpiryAndIssueDate()
		{
			var utc0 = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
			var issueTime = DateTime.UtcNow;

			var iat = (int)issueTime.Subtract(utc0).TotalSeconds;
			var exp = (int)issueTime.AddMinutes(55).Subtract(utc0).TotalSeconds;

			return new[] { iat, exp };
		}
	}
	class Program
	{
		static void Main(string[] args)
		{


			var auth = DigitalSignature.GetAccessToken();

			Console.WriteLine(auth);
			Console.Read();
			//	var client = new WebClient();
			//	client.Encoding = Encoding.UTF8;
			//// var uri = "https://accounts.google.com/o/oauth2/token";
			// var uri = "https://www.googleapis.com/oauth2/v4/token";
			//	var content = new NameValueCollection();

			// // content["assertion"] = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJoYXBwaWVwdWdAaW5sYWlkLWJhY2tib25lLTEyMDQxMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kZXZzdG9yYWdlLnJlYWRvbmx5IiwiYXVkIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3Y0L3Rva2VuIiwiZXhwIjoxMzI4NTU0Mzg1LCJpYXQiOjEzMjg1NTA3ODV9.gaVushwzH8yvaBrAwcx0pwrNE8WYyVrN+5lihrl1Q3LrL9likjMLvNqavVxvnKV03fGWaEqWZ1zL6LRL80XlIWcz3yq4/9kMFhBHEYO6tDUBI1m/dBPA+9BTuuUUUQZ1qD4Re3BMXAti9GrffvQ4AFAJ+74Eyhcg8IyU1zlFuKsRtSc+L6dPBC8+ZhoxXMN8UvFdBl/rdQVIFfEvX0ebrsMkrfdrFQp5lcXBhhiyDc+hqfZYy1SiesfGoO1ASKDM0EX5H7Nj7kOAYltHPcKDAtT97hwauUVWLqWHK73J8vD+3F5M5KOKTRatzLwEjM/huMVLubkJ5cvLuN2+oP3EwQ==";
			//	content["grant_type"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
			//	content["assertion"] = ob.signDataInfo;
			//	string response = Encoding.UTF8.GetString(client.UploadValues(uri, "POST", content));
			//	JavaScriptSerializer ser = new JavaScriptSerializer();
			//	var result = ser.Deserialize<dynamic>(response);

		}
	}
}
