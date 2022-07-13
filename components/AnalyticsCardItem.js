function AnalyticsCardItem({title, Icon, color, total, percent, PercentIcon, percentColor}) {
  return (
    <div className="bg-white rounded-lg drop-shadow-md p-4">
        <div className="flex flex-row items-center justify-between">
        <Icon className={`h-10 w-10 p-2 text-[${color}] rounded-3xl border`}/>
        <p className={`text-[${percentColor}] flex items-center text-xs`}>{percent} <PercentIcon className='h-4 w-4'/></p>
        </div>
        <p className="text-[#17254b] text-xl leading-[3rem] font-bold">{total}</p>
        <p className="text-gray-500 text-sm">{title}</p>
    </div>
  )
}

export default AnalyticsCardItem