
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
	[ActorIds] [varchar](255) NOT NULL,
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