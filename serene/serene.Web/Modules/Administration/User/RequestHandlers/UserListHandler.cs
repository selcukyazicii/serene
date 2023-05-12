using Serenity.Services;
using MyRequest = serene.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<serene.Administration.UserRow>;
using MyRow = serene.Administration.UserRow;

namespace serene.Administration
{
    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}