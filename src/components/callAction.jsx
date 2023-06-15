import '../css/Home.css'
function CallAction() {
    return (

        <div className="flex justify-center pb-5 mt-10">
            <div className='bg-callAction h-[30vh] w-[80vw] callAction rounded-tr-[8rem] rounded-bl-[8rem]'>
                <div className="action-call py-5">

                    <p className='text-white text-2xl text-center px-5'>Calling All Culinary Enthusiasts: Share Your Flavorful Creations with the World!</p>
                    <div className='flex justify-center'>
                        <button className="rounded-none bg-white p-3 mt-3 text-greenPaste tracking-widest">Add Recipes</button>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default CallAction;