const ProfilePhoto = () => {
    return(
        {/*Very bad code to make a custom component for nice profile picture showcase in About page. Could be fixed via putting all this in CSS file.*/},
        <div className="w-[260px] h-[260px] group">
            <div className=" border-[#A3CCBA] border-2 w-[240px] h-[240px] absolute ml-[5px] mt-[5px] group-hover:ml-0 group-hover:mt-0 duration-300 ease-in-out"></div>
            <div className="w-[240px] h-[240px] absolute ml-[15px] mt-[15px] bg-[#053D38]/[0.5] z-20 hover:mt-[20px] hover:ml-[20px] hover:bg-[#053D38]/[0.0] duration-300 ease-in-out"></div>
            <img src="profile2.jpg" alt="profile_picture" height="auto" width="240px" className="ml-[15px] pt-[15px] group-hover:ml-[20px] group-hover:pt-[20px] duration-300 ease-in-out z-10 relative"/>
        </div>
    )
}

export default ProfilePhoto