//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HappiPugService.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class VideoShopItem
    {
        public int Id { get; set; }
        public decimal ptop { get; set; }
        public decimal pleft { get; set; }
        public Nullable<decimal> starttime { get; set; }
        public Nullable<decimal> endtime { get; set; }
        public Nullable<int> Video_Id { get; set; }
        public string ProductHandle { get; set; }
    
        public virtual Video Video { get; set; }
    }
}
