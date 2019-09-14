#!/usr/bin/perl -w

use strict;
use Data::Dumper;
use 5.010;
use POSIX qw<strftime>;

my @abbr = qw(januari februari mars april maj juni juli augusti september oktober november december);
my @loc = localtime();
my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();

$loc[3]=1;
$loc[4]=0;

my $base_url = "wget https://sv.wikipedia.org/wiki/";
for ( 1..366 ) {
    #say strftime("%d/%m/%Y", @loc );
    my $month = strftime("%m", @loc)-1;
    my $day = strftime("%d", @loc)-0;
    #print strftime("%d", @loc), "_", $abbr[$month], "\n";
    my $url = $base_url . $day . "_" . $abbr[$month];
    system($url);
    sleep(2);
    $loc[3]++;
}
