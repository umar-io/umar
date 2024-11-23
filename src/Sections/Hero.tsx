import ui from '../assets/ui.png'
const Hero = () => {
    return (
        <section className="w-full px-6 lg:py-8 md:py-[0] lg:px-[50px] flex justify-between items-center gap-8 space-default">
            <article className="lg:w-1/2 xl:w-1/2 md:w-full flex w-full flex-col lg:items-start items-center justify-center h-[400px]">
                <h1 className='lg:text-3xl text-2xl mb-4 text-wrap text-align-default'>
                    Hey there , I'm a <span className='playfairui'>Fullstack Developer</span>
                </h1>
                <span className='lg:pr-[40px] lg:text-[18px] text-[20px] text-default md:text-center'>
                    with expertise in creating attractive and effective user interfaces. I take pleasure in working on projects that incorporate both front-end and back-end technologies to deliver smooth user experiences
                </span>
            </article>
            <aside className="w-1/2 bg-[#e3e3e3] p-8 h-[400px] hidden lg:flex justify-center rounded-lg">
                <img src={ui} alt="" className="h-full" />
            </aside>
        </section>
    )
}

export default Hero