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

	public sealed class DigitalSignature
	{
		private RSAParameters publicKey;
		private RSAParameters privateKey;

		public void AssignNewKey()
		{
			using (var rsa = new RSACryptoServiceProvider(2048))
			{
				rsa.PersistKeyInCsp = false;
				publicKey = rsa.ExportParameters(false);
				privateKey = rsa.ExportParameters(true);
			}
		}
        X509Certificate2 certificate = new X509Certificate2(@"C:\chaitanya\raja\myshop\you_app\RSASign\HappiePug-bbca6989906d.p12", "notasecret");

		public void  SignData()
		{
            // signiture
            var rsa = certificate.PrivateKey as RSACryptoServiceProvider;
            var cspParam = new CspParameters
            {
                KeyContainerName = rsa.CspKeyContainerInfo.KeyContainerName,
                KeyNumber = rsa.CspKeyContainerInfo.KeyNumber == KeyNumber.Exchange ? 1 : 2
            };
            var inputBytes = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJoYXBwaWVwdWdAaW5sYWlkLWJhY2tib25lLTEyMDQxMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kZXZzdG9yYWdlLnJlYWRvbmx5IiwiYXVkIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3Y0L3Rva2VuIiwiZXhwIjoxMzI4NTU0Mzg1LCJpYXQiOjEzMjg1NTA3ODV9";
            var aescsp = new RSACryptoServiceProvider(cspParam) { PersistKeyInCsp = false };
            var signatureBytes = aescsp.SignData(Encoding.UTF8.GetBytes(inputBytes), "SHA256");
            var signatureEncoded = Convert.ToBase64String(signatureBytes);
            var jwt = inputBytes + "." + signatureEncoded;
            System.IO.File.WriteAllText(@"JWT.txt", jwt);
            //using (var rsa = new RSACryptoServiceProvider(2048))
            //{
            //    rsa.PersistKeyInCsp = false;
            //    rsa.ImportParameters(privateKey);

            //    var rsaFormatter = new RSAPKCS1SignatureFormatter(rsa);
            //    rsaFormatter.SetHashAlgorithm("SHA256");

            //    return rsaFormatter.CreateSignature(hashOfDataToSign);
            //}
		}

		public bool VerifySignature(byte[] hashOfDataToSign, byte[] signature)
		{
			using (var rsa = new RSACryptoServiceProvider(2048))
			{
				rsa.ImportParameters(publicKey);

				var rsaDeformatter = new RSAPKCS1SignatureDeformatter(rsa);
				rsaDeformatter.SetHashAlgorithm("SHA256");

				return rsaDeformatter.VerifySignature(hashOfDataToSign, signature);
			}
		}
	}
	class Program
	{
		static void Main(string[] args)
		{
            DigitalSignature ob = new DigitalSignature();
            ob.SignData();

            var client = new WebClient();
            client.Encoding = Encoding.UTF8;
          //  var uri = "https://accounts.google.com/o/oauth2/token";
            var uri = "https://www.googleapis.com/oauth2/v4/token";
            var content = new NameValueCollection();

            content["assertion"] = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJoYXBwaWVwdWdAaW5sYWlkLWJhY2tib25lLTEyMDQxMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kZXZzdG9yYWdlLnJlYWRvbmx5IiwiYXVkIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3Y0L3Rva2VuIiwiZXhwIjoxMzI4NTU0Mzg1LCJpYXQiOjEzMjg1NTA3ODV9.gaVushwzH8yvaBrAwcx0pwrNE8WYyVrN+5lihrl1Q3LrL9likjMLvNqavVxvnKV03fGWaEqWZ1zL6LRL80XlIWcz3yq4/9kMFhBHEYO6tDUBI1m/dBPA+9BTuuUUUQZ1qD4Re3BMXAti9GrffvQ4AFAJ+74Eyhcg8IyU1zlFuKsRtSc+L6dPBC8+ZhoxXMN8UvFdBl/rdQVIFfEvX0ebrsMkrfdrFQp5lcXBhhiyDc+hqfZYy1SiesfGoO1ASKDM0EX5H7Nj7kOAYltHPcKDAtT97hwauUVWLqWHK73J8vD+3F5M5KOKTRatzLwEjM/huMVLubkJ5cvLuN2+oP3EwQ==";
            content["grant_type"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";

            string response = Encoding.UTF8.GetString(client.UploadValues(uri, "POST", content));
            JavaScriptSerializer ser = new JavaScriptSerializer();
            var result = ser.Deserialize<dynamic>(response);

		}
	}
}
