﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class happipugCloudEntities : DbContext
    {
        public happipugCloudEntities()
            : base("name=happipugCloudEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Actor> Actors { get; set; }
        public DbSet<ActorType> ActorTypes { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<VideoShopItem> VideoShopItems { get; set; }
        public DbSet<VideoType> VideoTypes { get; set; }
    }
}
