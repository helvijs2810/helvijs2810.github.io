//Custom list component for About page
const ListItem = ({listIcon ,listItem}) => {
    return(
        <li className="flex flex-row items-center text-xl">{listIcon}<p className="text-[#34675C]">{listItem}</p></li>
    )
}

export default ListItem