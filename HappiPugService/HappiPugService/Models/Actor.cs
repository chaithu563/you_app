//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HappiPugCloudService.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Actor
    {
        public int Id { get; set; }
        public string ActorName { get; set; }
        public Nullable<int> ActorTypeId { get; set; }
        public Nullable<int> LanguageId { get; set; }
    
        public virtual ActorType ActorType { get; set; }
        public virtual Language Language { get; set; }
    }
}
