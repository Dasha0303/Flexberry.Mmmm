﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Mmmm
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч акта приемки.
    /// </summary>
    // *** Start programmer edit section *** (ТЧАктаПриемки CustomAttributes)

    // *** End programmer edit section *** (ТЧАктаПриемки CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч акта приемки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧАктаПриемкиE", new string[] {
            "НомерПозиции as \'Номер позиции\'",
            "АктПриемки as \'Акт приемки\'",
            "АктПриемки.ДатаПриемки as \'Дата приемки\'"}, Hidden=new string[] {
            "АктПриемки.ДатаПриемки"})]
    [MasterViewDefineAttribute("ТЧАктаПриемкиE", "АктПриемки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ДатаПриемки")]
    [View("ТЧАктаПриемкиL", new string[] {
            "НомерПозиции as \'Номер позиции\'",
            "АктПриемки.ДатаПриемки as \'Дата приемки\'"})]
    public class ТЧАктаПриемки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерПозиции;
        
        private IIS.Mmmm.АктПриемки fАктПриемки;
        
        // *** Start programmer edit section *** (ТЧАктаПриемки CustomMembers)

        // *** End programmer edit section *** (ТЧАктаПриемки CustomMembers)

        
        /// <summary>
        /// НомерПозиции.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАктаПриемки.НомерПозиции CustomAttributes)

        // *** End programmer edit section *** (ТЧАктаПриемки.НомерПозиции CustomAttributes)
        public virtual int НомерПозиции
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАктаПриемки.НомерПозиции Get start)

                // *** End programmer edit section *** (ТЧАктаПриемки.НомерПозиции Get start)
                int result = this.fНомерПозиции;
                // *** Start programmer edit section *** (ТЧАктаПриемки.НомерПозиции Get end)

                // *** End programmer edit section *** (ТЧАктаПриемки.НомерПозиции Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАктаПриемки.НомерПозиции Set start)

                // *** End programmer edit section *** (ТЧАктаПриемки.НомерПозиции Set start)
                this.fНомерПозиции = value;
                // *** Start programmer edit section *** (ТЧАктаПриемки.НомерПозиции Set end)

                // *** End programmer edit section *** (ТЧАктаПриемки.НомерПозиции Set end)
            }
        }
        
        /// <summary>
        /// Т ч акта приемки.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАктаПриемки.АктПриемки CustomAttributes)

        // *** End programmer edit section *** (ТЧАктаПриемки.АктПриемки CustomAttributes)
        [PropertyStorage(new string[] {
                "АктПриемки"})]
        [NotNull()]
        public virtual IIS.Mmmm.АктПриемки АктПриемки
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАктаПриемки.АктПриемки Get start)

                // *** End programmer edit section *** (ТЧАктаПриемки.АктПриемки Get start)
                IIS.Mmmm.АктПриемки result = this.fАктПриемки;
                // *** Start programmer edit section *** (ТЧАктаПриемки.АктПриемки Get end)

                // *** End programmer edit section *** (ТЧАктаПриемки.АктПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАктаПриемки.АктПриемки Set start)

                // *** End programmer edit section *** (ТЧАктаПриемки.АктПриемки Set start)
                this.fАктПриемки = value;
                // *** Start programmer edit section *** (ТЧАктаПриемки.АктПриемки Set end)

                // *** End programmer edit section *** (ТЧАктаПриемки.АктПриемки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧАктаПриемкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧАктаПриемкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧАктаПриемкиE", typeof(IIS.Mmmm.ТЧАктаПриемки));
                }
            }
            
            /// <summary>
            /// "ТЧАктаПриемкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧАктаПриемкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧАктаПриемкиL", typeof(IIS.Mmmm.ТЧАктаПриемки));
                }
            }
        }
    }
}
