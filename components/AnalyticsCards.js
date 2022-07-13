import { ShoppingCartIcon, ChartPieIcon, UserGroupIcon, CreditCardIcon, ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import AnalyticsCardItem from './AnalyticsCardItem'

function AnalyticCards() {
  return (
    <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        <AnalyticsCardItem title='Total Sales' Icon={ShoppingCartIcon} color='#347ae2' total='$22,054.00' percent='30%' PercentIcon={ArrowSmUpIcon} percentColor='#16a34a'/>
        <AnalyticsCardItem title='Total Expenses' Icon={ChartPieIcon} color='#ec5859' total='$42,001,120' percent='-20%' PercentIcon={ArrowSmDownIcon} percentColor='#dc2626'/>
        <AnalyticsCardItem title='Total Clients' Icon={UserGroupIcon} color='#f5994c' total='25,123,955' percent='15%' PercentIcon={ArrowSmUpIcon} percentColor='#16a34a'/>
        <AnalyticsCardItem title='Total Balance' Icon={CreditCardIcon} color='#9a53e0' total='$60,951,100' percent='42%' PercentIcon={ArrowSmUpIcon} percentColor='#16a34a'/>
    </div>
  )
}

export default AnalyticCards