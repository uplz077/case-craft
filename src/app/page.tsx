/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Icons } from "@/components/Icons";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

// 星形评分组件
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-0.5 mb-2">
      {[...Array(rating)].map((_, index) => (
        <Star key={index} className={`h-5 w-5 text-green-600 fill-green-600`} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWithWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* logo图片 */}
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snail-1.png" alt="" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                个性化手机壳
                <span className="bg-green-600 px-2 text-white">定制</span> -
                让回忆触手可及
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                蜗小壳，您的
                <span className="font-semibold">专属记忆守护者</span>
                。通过我们的定制服务，您可以将那些珍贵的瞬间永久定格在您的手机壳上。无论是家庭合影、旅行美景，还是您喜爱的艺术作品，每一款手机壳都是对您美好回忆的独特致敬。我们不仅提供卓越的手机保护，更让您的设备成为个性和情感的展示窗口。立即上传您的照片，让每一次触摸都充满温情和故事。
              </p>
              {/* 产品特性 */}
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    高品质，耐用材质
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    五年不褪色保证
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    支持所有iPhone机型
                  </li>
                </div>
              </ul>
              {/* 用户评价 */}
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="/users/user-1.png"
                    alt="use image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="/users/user-2.png"
                    alt="use image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="/users/user-3.png"
                    alt="use image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="/users/user-4.jpg"
                    alt="use image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full"
                    src="/users/user-5.jpg"
                    alt="use image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <StarRating />
                  <p>
                    <span className="font-semibold">12,500+</span> 定制玩家认可
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            {/* 手机模型装饰 */}
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt="your image"
              />
              <img
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
                alt="line"
              />
              {/* 手机壳定制模型 */}
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWithWrapper>
      </section>

      {/* 定制手机壳效果展示 */}
      <section className="bg-slate-100 py-24">
        <MaxWithWrapper className="flex flex-col items-center gap-16 sm:gap32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              <span className="relative px-2">
                客户
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>
              如是说
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-2-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <StarRating />
              <div className="text-lg leading-8">
                <p>
                  “这个手机壳感觉非常耐用，我甚至因为它的设计得到了别人的称赞。我已经用了两个半月了，
                  <span className="p-0.5 bg-slate-800 text-white">
                    图片依然非常清晰
                  </span>
                  。我之前用的那个手机壳，图片几周后就开始褪色，变成了黄褐色。太喜欢它了。”{" "}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">已验证购买</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <StarRating />
              <div className="text-lg leading-8">
                <p>
                  “我通常会把手机和钥匙一起放在口袋里，这导致我之前的手机壳上出现了一些相当严重的划痕。而这款手机壳，除了角落上有一条几乎看不出来的划痕外，
                  <span className="p-0.5 bg-slate-800 text-white">
                    在大约半年后看起来仍然像全新的一样
                  </span>
                  。我很喜欢它。”{" "}
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">已验证购买</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWithWrapper>
        {/* 手机壳动画效果 */}
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* 定制手机壳流程 */}
      <section>
        <MaxWithWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                快来上传照片吧 <br />
                获取
                <span className="relative px-2 bg-green-600 text-white">
                  您的专属手机壳
                </span>
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              {/* 效果指示箭头，小屏幕旋转方向 */}
              <div className="relative h-80 md:h-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-garay-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              高品质硅胶材质
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              抗刮擦和抗指纹涂层
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              兼容无线充电
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              五年印刷质保
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
              href="/configure/upload"
            >
              立即定制你的手机壳
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </MaxWithWrapper>
      </section>
    </div>
  );
}
