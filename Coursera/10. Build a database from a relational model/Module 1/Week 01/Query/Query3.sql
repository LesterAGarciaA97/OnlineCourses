Select CustLname, custfname, tourdescription, 
        eventdate, guidefname, guidelname
from tour, guide, event, schedule, customer
where tourguideid = guideid
and tourid=eventtourid
and eventid = schedeventid
and schedcustnum = custnum
order by custlname, custfname

