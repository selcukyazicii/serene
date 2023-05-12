﻿using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<serene.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = serene.Administration.LanguageRow;


namespace serene.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}