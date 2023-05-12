
namespace serene.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        public int TotalOrderCount { get; set; }
        public int TotalEmployees { get; set; }
        public int DeliveredTenDays { get; set; }
    }
}