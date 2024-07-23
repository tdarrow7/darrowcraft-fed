import React from 'react'

export const CoffeeSkeleton = () => {
  return (
    <ul className="grid grid-cols-4 gap-6">
        <li><CoffeeSkeleton></CoffeeSkeleton></li>
        <li><CoffeeSkeleton></CoffeeSkeleton></li>
        <li><CoffeeSkeleton></CoffeeSkeleton></li>
        <li><CoffeeSkeleton></CoffeeSkeleton></li>
    </ul>
  )
}
