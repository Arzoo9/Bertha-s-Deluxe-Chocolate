#!/usr/bin/perl 
   print "Content-type:  text/html\n\n";
use DBI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn043";
my $username = "jadrn043";
my $password = "uphold";
my $database_source = "dbi:mysql:$database:$host:$port";
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
my $sth = $dbh->prepare("SELECT * FROM Chocolate_Data order by sku");
$sth->execute();

my $mydb = "proj4";
my $myUser = "jadrn043";
my $myPWD = "uphold";
my $mydb_source = "dbi:mysql:$mydb:$host:$port";
my $mydbh = DBI->connect($mydb_source, $myUser, $myPWD) 
or die 'Cannot connect to db';

print <<END_CONTENT;

<html>
    <head>
        <title>Report</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
   
 		<h1>Report<h1>
   
END_CONTENT



$str .=  "<table border='1' cellpadding='8'><tr><th>Name</th><th>Date</th><th>SKU</th><th>Quantity</th><th>Cost</th><th>Retail Price</th><th>Total Profit</th></tr>";
$GrandSale= 0;
$GrandProfit= 0;

while(@row=$sth->fetchrow_array()) {
 			$str .=  "<tr>";    		
    		my $mysth = $mydbh->prepare("SELECT sku, category, title, short_description, long_description, cost, retail FROM products where sku='".@row[0] ."'");
			$mysth->execute();
    		while(my @myrow=$mysth->fetchrow_array()) {
               
    			if(@myrow[0] == @row[0]){
                    $str .=  "<td>". @myrow[2] ."</td><td>". @row[2] ."</td><td>". @row[0] ."</td><td>". @row[1] ."</td>";
    				$str .=  "<td>". @myrow[5] ."</td><td>". @myrow[6] ."</td><td>". (@myrow[6] - @myrow[5])*@row[1]  ."</td>";
    				$GrandSale += @myrow[6]*@row[1];
					$GrandProfit += (@myrow[6] - @myrow[5])*@row[1];
    				
				}		
    		}
    		$str .=  "</tr>";	

}
$str .=  "<tr><td colspan='6'>Grand Sale</td><td>".$GrandSale."</td></tr><tr><td colspan='6'>Grand Profit</td><td>".$GrandProfit."</td></tr></table>";
    	
print $str;


$sth->finish();
$dbh->disconnect();
$mydbh->disconnect();
print "</body>\n";
print "</html>\n";