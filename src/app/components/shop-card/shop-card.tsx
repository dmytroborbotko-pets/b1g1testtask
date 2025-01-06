import { Shop } from "@/app/types/shop";
import Button from "../button/Button";
import { DiscountIcon, VoucherIcon } from "../Icons";

interface ShopCardProps {
  shop: Shop;
  isQRBannerVisible: boolean;
}

const ShopCard = ({ shop, isQRBannerVisible }: ShopCardProps) => {
  const price = isQRBannerVisible ? shop.price : shop.discountedPrice;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-[#202020] text-2xl font-['Red_Hat_Display'] font-[700] mb-2">
        {shop.name}
      </h2>
      <p className="text-[#202020] font-['Red_Hat_Display'] font-[600] mb-4">
        Subscribe for 1 year
      </p>

      <div className="flex gap-4 mb-6 border-b border-[#F3F3F3] pb-5  ">
        <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-[15px] p-2">
          <div className="bg-black p-2 rounded-lg">
            <VoucherIcon width={26} height={26} />
          </div>
          <div className="">
            <p className="text-[14px] text-[#202020] font-['Red_Hat_Display'] font-[600]">
              Get up to
            </p>
            <p className="text-[16px] text-[#202020] font-['Red_Hat_Display'] font-[700]">
              {shop.vouchers} vouchers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-[15px] p-2">
          <div className="bg-black p-2 rounded-lg">
            <DiscountIcon width={26} height={26} />
          </div>
          <div className="">
            <p className="text-[14px] text-[#202020] font-['Red_Hat_Display'] font-[600]">
              Save up to
            </p>
            <p className="text-[16px] text-[#202020] font-['Red_Hat_Display'] font-[700]">
              CHF {shop.savings}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[#202020] text-2xl font-['Red_Hat_Display'] font-[700]">
          CHF {price}
        </p>
        <Button>Buy Subscription</Button>
      </div>
    </div>
  );
};

export default ShopCard;
