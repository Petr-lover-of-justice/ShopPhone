import React from 'react'



type PhoneProps = {
    types: number[],
    setActiveType: (typeId: number) => void,
    typeNames: string[],
    sizes: number[],
    setActiveSize: (i: number) => void,
    activeSize: number,
    activeType: number
}
export const CardProperty: React.FC<PhoneProps> = ({
    types,
    setActiveType,
    typeNames,
    sizes,
    setActiveSize,
    activeSize,
    activeType
}) => {
    return (
        <div>
            <div className="phone-block__selector">
                <ul>
                    {types.map((typeId: number) => (
                        <li
                            key={typeId}
                            onClick={() => setActiveType(typeId)}
                            className={activeType === typeId ? 'active' : ''}>
                            {typeNames[typeId]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size: string | number, i: number) => (
                        <li
                            key={size}
                            onClick={() => setActiveSize(i)}
                            className={activeSize === i ? 'active' : ''}>
                            {size}
                            <ul className={size === "чёрный" ? "phone-block__black" : "" || size === "белый" ? 'phone-block__while' : "phone-block__coral"}></ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
