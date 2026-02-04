// icon
// import postIcon from "../assets/icon/post.svg";
// import categoryIcon from "../assets/icon/category.svg";
// import activeIcon from "../assets/icon/active.svg";
// import viewIcon from "../assets/icon/view.svg";

function DashboardCard({ post = [], info = [] }) {
  return (
    <div className="mt-[32px] flex justify-between gap-[24px]">
      {/* Posts */}
      <div className="w-full transform rounded-[12px] border-[1px] border-[#E5E7EB] p-[25px] transition-transform duration-300 hover:scale-105 hover:shadow-[0px_11px_13px_-4px_rgba(0,_0,_0,_0.1)]">
        <div className="mb-[16px] flex items-center justify-between">
          <img src="/imgss/asosiylist.svg" alt="posts" />
          <span className="text-[14px] font-medium text-[#21C45D]">12%</span>
        </div>
        <div>
          <h2 className="mb-[4px] text-[24px] font-bold text-[#0F1729]">
            {post.length}
          </h2>
          <p className="text-[14px] text-[#6B7280]">Total Posts</p>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full transform rounded-[12px] border-[1px] border-[#E5E7EB] p-[25px] transition-transform duration-300 hover:scale-105 hover:shadow-[0px_11px_13px_-4px_rgba(0,_0,_0,_0.1)]">
        <div className="mb-[16px] flex items-center justify-between">
          <img src="/imgss/2.png" alt="posts" />
          <span className="text-[14px] font-medium text-[#21C45D]">2%</span>
        </div>
        <div>
          <h2 className="mb-[4px] text-[24px] font-bold text-[#0F1729]">
            {info.length}
          </h2>
          <p className="text-[14px] text-[#6B7280]">Categories</p>
        </div>
      </div>

      {/* Views */}
      <div className="w-full transform rounded-[12px] border-[1px] border-[#E5E7EB] p-[25px] transition-transform duration-300 hover:scale-105 hover:shadow-[0px_11px_13px_-4px_rgba(0,_0,_0,_0.1)]">
        <div className="mb-[16px] flex items-center justify-between">
          <img src="/imgss/list.png" alt="views" />
          <span className="text-[14px] font-medium text-[#21C45D]">23%</span>
        </div>
        <div>
          <h2 className="mb-[4px] text-[24px] font-bold text-[#0F1729]">
            2.3K
          </h2>
          <p className="text-[14px] text-[#6B7280]">Total View</p>
        </div>
      </div>

      {/* Active Users */}
      <div className="w-full transform rounded-[12px] border-[1px] border-[#E5E7EB] p-[25px] transition-transform duration-300 hover:scale-105 hover:shadow-[0px_11px_13px_-4px_rgba(0,_0,_0,_0.1)]">
        <div className="mb-[16px] flex items-center justify-between">
          <img src="/imgss/user.svg" alt="active users" />
          <span className="text-[14px] font-medium text-[#21C45D]">+8%</span>
        </div>
        <div>
          <h2 className="mb-[4px] text-[24px] font-bold text-[#0F1729]">
            800
          </h2>
          <p className="text-[14px] text-[#6B7280]">Active User</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
