<script>
    import ExampleBox from '../components/ExampleBox'

    export default {
        name: "LsDateTime",
        components: {ExampleBox},
        data() {
            return {
                timeZonesOne:  [
                    'IDLW', 'NUT', 'HST', 'AKST', 'PST', 'MST', 'CST', 'EST', 'AST', 
                    'BRT', 'FNT', 'CVT', 'UTC'
                ],
                timeZonesTwo: [
                    'CET', 'EET', 'EAT', 'GET', 'PKT', 'BST', 'THA', 'CIT', 
                    'JST', 'AEST', 'SBT', 'NZST', 'TOT', 'LINT'
                ]
            }
        }
    }
</script>


<template>
    <div>
        <v-toolbar dark flat color="primary" >
            <v-toolbar-title>LS DateTime</v-toolbar-title>
        </v-toolbar>
        <v-container>
            <example-box title="Constructor">
                <div class="function-header">
                    <h3>Arguments: </h3> <span><b>String</b></span> <span><i>dateString</i></span>
                </div>
                <div class="function-body">
                    dateString can take any of the following formats:
                </div>
                <div class="tabbed no-bottom-padding"><b>[Month], [Date] [Year]</b></div>
                <div class="tabbed no-bottom-padding">Month is either the full name of the month for the three letter abbreviation of that month.</div>
                <div class="tabbed no-bottom-padding">Date is a valid date in that month.</div>
                <div class="tabbed no-bottom-padding">Year is a any positive number.</div>
                <div class="tabbed">Example: "November 12, 2019" or "Nov 12, 2019" </div>

                <div class="tabbed no-bottom-padding"><b>[Month], [Date] [Year] [Hours]:[Minutes]:[Seconds]</b></div>
                <div class="tabbed no-bottom-padding">Same as the above function, but also accepts a time with a space after the year.</div>
                <div class="tabbed no-bottom-padding">Hours is an int between 0 and 23.</div>
                <div class="tabbed no-bottom-padding">Minutes is an int between 0 and 59.</div>
                <div class="tabbed no-bottom-padding">Seconds is an int between 0 and 59.</div>
                <div class="tabbed">Example: "November 12, 2019 13:45:30" </div>

                <div class="tabbed no-bottom-padding"><b>[Month]-[Date]-[Year]</b></div>
                <div class="tabbed no-bottom-padding">Month is the 1-indexed month of the year.</div>
                <div class="tabbed no-bottom-padding">Date is a valid date in that month.</div>
                <div class="tabbed no-bottom-padding">Year is a any positive number.</div>
                <div class="tabbed">Example: "11-12-2019" is the same as "November 12, 2019"</div>

                <div class="tabbed no-bottom-padding"><b>[C# dateString]</b></div>
                <div class="tabbed" >Interprets a C# date string</div>

                <div class="tabbed no-bottom-padding"><b>undefined</b></div>
                <div class="tabbed">Returns the current date</div>
                
                <div>
                    All date strings default to noon on the given date except for the Null case, which sets the time to the current time.
                    The default timezone is Moutain Standard Time.
                </div>
            </example-box>
            <br/>
            <example-box title="Getters">
                <div class="function-header">
                    <h3>getMonth(String <i>format</i>)</h3>
                </div>
                <div class="function-body">Format can be any of the following values:</div> 
                <div class="tabbed no-bottom-padding"><b>"full"</b></div>
                <div class="tabbed no-bottom-padding">Returns a date with the full month.</div>
                <div class="tabbed no-bottom-padding"><b>"short"</b></div>
                <div class="tabbed no-bottom-padding">Returns a date with the three letter abbrevation fo the month.</div>
                <div class="tabbed no-bottom-padding"><b>undefined</b></div>
                <div class="tabbed no-bottom-padding">Returns the zero-indexed number of the month</div>
                <br>

                <div class="function-header">
                    <h3>getCalendarMonth()</h3>
                </div>
                <div class="no-bottom-padding" >Takes no argurments. Returns the one-indexed month of the year.</div>

                <br>

                <div class="function-header">
                    <h3>getYear()</h3>
                </div>
                <div class="no-bottom-padding">Takes no argurments. Returns the year.</div>
                <br>
                <div class="function-header">
                    <h3>get24HourTime(Bool <i>showSeconds</i>)</h3>
                </div>
                <div class="no-bottom-padding">Returns <b>Hour:Minuets</b> or <b>Hour:Minuets:Seconds</b> in 24 hour format depending on if <i>showSeconds</i> is true.</div>
                <br>

                <div class="function-header">
                    <h3>get12HourTime(Bool <i>showSeconds</i>)</h3>
                </div>
                <div class="no-bottom-padding">Returns <b>Hour:Minuets Stamp</b> or <b>Hour:Minuets:Seconds Stamp</b> in 24 hour format depending on if <i>showSeconds</i> is true.</div>
                <br>

                <div class="function-header">
                    <h3>getTimeZone()</h3>
                </div>
                <div class="no-bottom-padding">Takes no arguments. Returns the 3 letter timezone abbreviation.</div>
                <br>
                <div class="function-header">
                    <h3>getDayOfWeek(String <i>format</i>)</h3>
                </div>
                <div class="function-body">Format can be any of the following values:</div> 
                <div class="tabbed no-bottom-padding"><b>"full"</b></div>
                <div class="tabbed no-bottom-padding">Returns the fully written out day of the week.</div>
                <div class="tabbed no-bottom-padding"><b>"short"</b></div>
                <div class="tabbed no-bottom-padding">Returns the three letter abbrevation of the day of the week.</div>
                <div class="tabbed no-bottom-padding"><b>"single"</b></div>
                <div class="tabbed no-bottom-padding">Returns one or two letter abbrivation of the day of the week.</div>
                <div class="tabbed no-bottom-padding"><b>undefined</b></div>
                <div class="tabbed no-bottom-padding">Returns the zero-indexed number of the day of the week.</div>

            </example-box>
            <br>
            <example-box title="Setters">
                <div class="function-header">
                    <h3>setYear(Int <i>year</i>)</h3>
                </div>
                <div class="no-bottom-padding">Sets the year of the date. <i>Year</i> accepts an int that must be greater than 0.</div>
                <br>

                 <div class="function-header">
                    <h3>setMonth(Int <i>month</i>)</h3>
                </div>
                <div class="no-bottom-padding">Sets the month of the date. <i>Month</i> accepts an int that represents the 1-indexed month of the year.</div>
                <br>

                <div class="function-header">
                    <h3>setZeroMonth(Int <i>month</i>)</h3>
                </div>
                <div class="no-bottom-padding">Same as setMonth, but <i>month</i> is 0-indexed.</div>
                <br>

                <div class="function-header">
                    <h3>setDate(Int <i>date</i>)</h3>
                </div>
                <div class="no-bottom-padding">Sets the date of the month. Checks if <i>date</i> is a valid date for the current month.</div>
                <br>

                <div class="function-header">
                    <h3>setHours(String/Int <i>hours</i>)</h3>
                </div>
                <div>Sets the hours of the LSDateTime. Hours can be either a string or an Int.</div>
                <div class="tabbed no-bottom-padding"><b>String</b></div>
                <div class="tabbed no-bottom-padding">As a string, <i>hours</i> can be a number between 1 and 12 with the suffix either 'am' or 'pm' next to it. </div>
                <div class="tabbed no-bottom-padding">Example: '12pm' or '11 am'</div>

                <div class="tabbed no-bottom-padding"><b>Int</b></div>
                <div class="tabbed no-bottom-padding">As an int, <i>hours</i> can be any number between 0-23</div>
                <br>
                
                <div class="function-header">
                    <h3>setMinutes(Int <i>minutes</i>)</h3>
                </div>
                <div class="no-bottom-padding">Sets the minutes of the LSDateTime. <i>Minutes</i> must be between 0 and 59.</div>
                <br>

                <div class="function-header">
                    <h3>setSeconds(Int <i>seconds</i>)</h3>
                </div>
                <div class="no-bottom-padding">Sets the seconds of the LSDateTime. <i>Seconds</i> must be between 0 and 59.</div>
                <br>

                <div class="function-header">
                    <h3>setTimeZone(String <i>timeZone</i>)</h3>
                </div>
                <div>Sets the timezone of the LSDateTime. Accepted values are:</div>
                <div style="display: flex; flex-direction: row; width: 100%">
                    <div style="width: 30%;">
                        <div class="tabbed"  v-for="(tz, i) in timeZonesOne" :key="tz" > <b>{{tz}}</b>({{i - 12}})</div>
                    </div>
                    <div>
                        <div class="tabbed"  v-for="(tz, i) in timeZonesTwo" :key="tz" > <b>{{tz}}</b>(+{{i + 1}})</div>
                    </div>
                </div>
                
                <div class="function-header">
                    <h3>setTimeZoneAndUpdate(String <i>timeZone</i>)</h3>
                </div>
                <div>Same as setTimeZone but also updates the hours and date to match the new time zone.</div>
            </example-box>
            <br>
            <example-box title="Modifiers">

                <div class="function-header">
                    <h3>addYears(Int <i>years</i>)</h3>
                </div>
                <div class="no-bottom-padding">Adds <i>years</i> to the years in the LSDateTime. To subtract years, enter a negitive number.</div>
                <br>

                <div class="function-header">
                    <h3>addMonths(Int <i>months</i>)</h3>
                </div>
                <div>Adds <i>months</i> to the months in the LSDateTime. To subtract months, enter a negitive number. Will automatically adjust years if months overflow.</div>
                <div class="no-bottom-padding">Example: If you add 5 months to 'November 12th, 2018', it would result in 'March 12th, 2019'.</div>
                <br>

                <div class="function-header">
                    <h3>addDays(Int <i>days</i>)</h3>
                </div>
                <div>Adds <i>days</i> to the days in the LSDateTime. To subtract months, enter a negitive number. Will automatically adjust months and years if they overflow.</div>
                <div class="no-bottom-padding">Example: If you add 5 days to 'December 31th, 2018', it would result in 'January 4th, 2019'.</div>
                <br>

                <div class="function-header">
                    <h3>addHours(Int <i>hours</i>)</h3>
                </div>
                <div class="no-bottom-padding">Similar functionality to addDays, but with hours.</div>
                <br>

                <div class="function-header">
                    <h3>addMinuets(Int <i>minuets</i>)</h3>
                </div>
                <div class="no-bottom-padding">Similar functionality to addHours, but with minuets.</div>
                <br>

                <div class="function-header">
                    <h3>addSeconds(Int <i>seconds</i>)</h3>
                </div>
                <div class="no-bottom-padding">Similar functionality to addMinuets, but with seconds.</div>
                <br>
            </example-box>
            <br>
            <example-box title="Other">
                <div class="function-header">
                    <h3>stringify()</h3>
                </div>
                <div class="no-bottom-padding">Returns a string in formated as "[Month] [Date], [Year] [Hour]:[Minutes]:[Seconds]".</div>
            </example-box>
        </v-container>
    </div>
</template>


<style lang="scss">


</style>