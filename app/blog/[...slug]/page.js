const { default: SingleBlog } = require("@/Components/Blog/SingleBlog")

const SingleBlogPage = ({params}) => {
    return(
        <SingleBlog slug={params.slug} />
    )
}

export default SingleBlogPage;