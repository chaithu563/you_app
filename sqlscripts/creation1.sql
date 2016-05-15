
	CREATE TABLE [Language](
	[Id] [int] NOT NULL  IDENTITY(1,1) primary key ,
	[Name] [varchar](255) NULL
	)
	CREATE TABLE [ActorType](
	[Id] [int] NOT NULL  IDENTITY(1,1) primary key ,
	[TypeName] [varchar](255) NULL
	)
	
	CREATE TABLE [Actor](
	[Id] [int] NOT NULL  IDENTITY(1,1) primary key ,
	[ActorName] [varchar](255) NULL,
	
	[ActorTypeId] [int] foreign key  references [ActorType](Id),
	[LanguageId] [int] foreign key  references [Language](Id)
	)
	CREATE TABLE [VideoType](
	[Id] [int] NOT NULL  IDENTITY(1,1) primary key ,
	[TypeName] [varchar](255) NULL
	)
	CREATE TABLE [Videos](
	[Id] [int] NOT NULL  IDENTITY(1,1) primary key ,
	[YoutubeID] [varchar](255) NOT NULL ,
	[VideoName] [varchar](255) NOT NULL,
	
	[LanguageId] [int] foreign key  references [Language](Id),	
	[ActorIds] [varchar](255),
	[VideoTypeId] [int] foreign key  references VideoType(Id)
	)
	
	CREATE TABLE [VideoShopItems](
	[Id] [int] IDENTITY(1,1) NOT NULL primary key,

	[ptop] [decimal](18, 0) NOT NULL,
	[pleft] [decimal](18, 0) NOT NULL,
	[starttime] [decimal](28, 6) NULL,
	[endtime] [decimal](28, 6) NULL,
	[Video_Id] [int] foreign key references [Videos](Id),
	[ProductHandle] [varchar](max) NULL)
	
	USE [happipug]
GO






test
/****** Object:  Table [happipug].[MovieItems]    Script Date: 05/14/2016 16:17:21 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [ShopItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductNo] [numeric](18, 0) NULL,
	[ProductName] [varchar](255) NULL,
	[ProductShopURL] [varchar](max) NULL,
	[ProductImgURL] [varchar](max) NULL,
	[ProductPrice] [money] NULL,
	[ptop] [decimal](18, 0) NOT NULL,
	[pleft] [decimal](18, 0) NOT NULL,
	[starttime] [decimal](28, 6) NULL,
	[endtime] [decimal](28, 6) NULL,
	[Video_Id] [int] NULL,
	[ProductHandle] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [ShopItems]  WITH CHECK ADD FOREIGN KEY([Video_Id])
REFERENCES [Videos] ([Id])
GO
