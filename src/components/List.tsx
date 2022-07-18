import {Cat} from '../types/cats'

interface Props {
    cats: Array<Cat>
}

const List = ({cats}: Props) => {
    const renderList = (): JSX.Element[] => {
        return cats.map((cat, index) => {
            return (
                <li title={'uno'} key={index}>
                    <h4>{cat.fact}</h4>
                </li>
            )
        })
    }

    return (
        <ul title={"list"}>
            {renderList()}
        </ul>
    )
}

export default List