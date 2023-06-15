import foodIcon from '../assets/Food.png'
import '../css/Home.css'
import RecipeCategory from './RecipeCategories';
import NavBar from './Nav';
import Popular from './popular';
import CallAction from './callAction';

function Hero() {
    return (

        <div className='bg-sysBackgroundColor min-h-screen bg-cover'>
            <NavBar />
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className='leading-loose'>
                        <p className='font-bold text-2xl mb-4 tracking-wide titleHome'>Lorem ipsum dolorr sit amet <br></br>
                            consectetur.
                        </p>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Leo sociis velit <br></br>
                               neque integer fermentum dignissim id maecenas. Nulla <br></br> tellus tincidunt nibh pellentesque mattis mi odio dignissim
                            <br></br> convallis.</p>
                    </div>
                    <div>
                        <img src={foodIcon} />
                    </div>
                </div>
            </div>
            <div className='add'>
                <hr className="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700">
                </hr>
                <div className="hidden md:block rounded-full bg-greenPaste text-white w-30 text-center p-10 class-btn ">Add <br></br>Recipes</div>
            </div>
            <RecipeCategory />
            <Popular />
            <CallAction/>
        </div>

    )
}
export default Hero;