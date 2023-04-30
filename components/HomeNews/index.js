import Image from "next/image";
import Link from "next/link";
export default function HomeNews({ post }) {
  console.log(post, "news home");
  return (
    <div className="mt-16">
      <div class="py-12">
        <div class="xl:container m-auto px-6 text-blue-700 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-blue-700 italic md:text-4xl  ">
              #ОНЦЛОХ БУЛАН
            </h2>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {post.data.map((el, index) => {
              return (
                <div
                  key={index}
                  class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100   bg-opacity-50 shadow-2xl shadow-gray-600/10"
                >
                  <div class="relative overflow-hidden rounded-xl">
                    <Image
                      src="/image/news/cover_img_03.png"
                      key={index}
                      alt="art cover"
                      width={1000}
                      height={667}
                      className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div class="mt-6 relative">
                    <h3 class=" text-xl font-semibold text-gray-800 ">
                      {el.attributes.title}
                    </h3>
                    <p class="mt-6 mb-8 text-gray-600 ">
                      {el.attributes.description}
                    </p>
                    <Link class="inline-block" href={`/posts/${el.id}`}>
                      <span class="text-primary">дэлгэрэнгүй</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
