import React from 'react'

const Category = () => {
    const data = [
        {
            cateImg: "https://m.media-amazon.com/images/I/71RUxoV0VjL._AC_SL1500_.jpg",
            cateName: "Fashion",
        },
        {
            cateImg: "https://pimallmetro.com/wp-content/uploads/2022/01/electronic-gadgets.jpeg",
            cateName: "Electronics",
        },
        {
            cateImg: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Pravaig-Defy-281120221416.jpg&w=350&h=251&q=90&c=1",
            cateName: "Cars",
        },
        {
            cateImg: "https://www.seekpng.com/png/small/378-3780995_better-homes-and-gardens-magazine-logo.png",
            cateName: "Home & Gardens",
        },
        {
            cateImg: "https://www.nicepng.com/png/detail/253-2534236_open-gift-box-white-transparent-clip-art-image.png",
            cateName: "Gifts",
        },
        {
            cateImg: "data:image/png;base64,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",
            cateName: "Music",
        },
        {
            cateImg: "https://thumbs.dreamstime.com/b/health-beauty-studio-vector-logo-stroke-pink-rose-flower-illustration-brand-lettering-95564351.jpg",
            cateName: "Healthy & Beauty",
        },
        {
            cateImg: "https://www.lonetreevet.com/blog/wp-content/uploads/2017/02/LoneTree_iStock-106396236.jpg",
            cateName: "Pets",
        },
        {
            cateImg: "https://media.licdn.com/dms/image/D4D12AQGUrLOn5tMUUQ/article-cover_image-shrink_720_1280/0/1664994722218?e=2147483647&v=beta&t=NSpS0K6d_sjBkeObnk9FfLQu1VJwnDKRfr99fImA3ho",
            cateName: "Baby Toys",
        },
        {
            cateImg: "https://thumbs.dreamstime.com/b/groceries-paper-bag-vector-illustration-97077851.jpg",
            cateName: "Groceries",
        },
        {
            cateImg: "https://www.shutterstock.com/image-vector/stacks-books-reading-pile-textbooks-260nw-1988002235.jpg",
            cateName: "Books",
        },
    ]
  return (
    <>
    <div className="category">
        {
            data.map((value, index) =>{
                return(
                    <div className="box f_flex"  key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName} </span>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Category