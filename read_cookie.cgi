#!/usr/bin/perl  

use CGI;
use CGI::Cookie

$q = new CGI;

my $q = new CGI;

use DBI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn043";
my $username = "jadrn043";
my $password = "uphold";
my $database_source = "dbi:mysql:$database:$host:$port";
    
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

$str = "This is String-";
 
my $cookie = $q->cookie(-name=>'jadrn043',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
         

<head>
	<title>Cookie Reader</title>
        	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
            <meta http-equiv="Content-Style-Type" content="text/css" />
            <link rel="stylesheet" type="text/css" href="http://jadran.sdsu.edu/~jadrn043/proj4/index.css" />
</head>

<body>
     <header>
         <div id="CompanyName">Bertha's Deluxe Chocolates</div>
        <a href="http://jadran.sdsu.edu/~jadrn043/proj4/index.html"><div class="Menulist">Home</div></a>
        <a href="http://jadran.sdsu.edu/~jadrn043/proj4/products.html"><div class="Menulist">Products</div></a>
        <a href="http://jadran.sdsu.edu/~jadrn043/proj4/orderonline.html"><div class="Menulist">Order Online</div></a>
        <a href="http://jadran.sdsu.edu/~jadrn043/proj4/aboutus.html"><div class="Menulist">About Us</div></a>
        <a href="http://jadran.sdsu.edu/~jadrn043/proj4/contact.html"><div class="Menulist">Contact</div></a>
        </header>
        
    <div class="Content">
            <div id="Confirm">We have recieved your order. Once we ship your order, you will get mail.</div>
           
END_CONTENT

    
my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime;
$year += 1900;
$mon++;

my $v = $q->cookie('jadrn043');
$Date = "$mon/$mday/$year";

@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);

    my $sth = $dbh->prepare("INSERT INTO Chocolate_Data VALUES('$sku','$qty','$Date');");                    
    $sth->execute();
    } 
     
print "<h1>Order Summary:</h1>\n";
my ($key, $value);
my $Total_Price = $q->param(Total_Price);

print "<table class='Orders'>";

print "<tr><td>Name:</td><td> ".$q->param(Lname)."".$q->param(Fname)."</td></tr>";
print "<tr><td>Address:</td><td>".$q->param(A01)." ".$q->param(A02)." ".$q->param(City)." ".$q->param(State)." ".$q->param(Zipcode)." ".$q->param(Country)."</td></tr>";
# print "<tr><td>Email ID:</td><td>".$q->param(E_id)."</td></tr>";
print "<tr><td>Phone Num:</td><td>".$q->param(PhNum)."</td></tr>";
print "<tr><td>Total Items:</td><td>".$q->param(Items)."</td></tr>";
print "<tr><td>Total price:</td><td>\$".$q->param(Total_Price)."</td></tr>";
print "<tr><td>Tax:</td><td>\$". $Total_Price*0.08 ."</td></tr>";
print "<tr><td>Shipping charge:</td><td>\$2</td></tr>";
print "<tr><td>Total:</td><td>\$".(($Total_Price*1.08)+2)."</td></tr>";


print "</table>";
        
print "<a href='http://jadran.sdsu.edu/~jadrn043/proj4/products.html'><div id='ch'>Shop again</div></a>";




$dbh->disconnect();
#{}print $str;
print "</div> ";
print "</body>\n";
print "</html>\n";