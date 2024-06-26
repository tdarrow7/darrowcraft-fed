import {LogoBox} from './LogoBox'
import { PrimaryNav } from './navigation/PrimaryNav'
import { SecondaryNav } from './navigation/SecondaryNav'

export const Masthead = () => {

    return (
        <div className="hdr">
            <div className="main py-1 px-4 shadow-sm">
                <div className="flex justify-between items-end">
                    <LogoBox/>
                    <div className='flex flex-col justify-between'>
                        <SecondaryNav/>
                        <PrimaryNav/>
                    </div>
                </div>
            </div>
        </div>
    )
}