#!/usr/bin/perl -w

use strict;
use Data::Dumper;

my $var;
{
    local $/;
    $var = <>;
}

$var =~ s/.*Händelser//gs;
#print $1 if $var =~ /\<ul\>(.*?)\<\/ul>/s;
if($var =~ /\<ul\>(.*?)\<\/ul>/s){
  $var = $1;
  $var =~ s|<.+?>||g;
}

my @var = split('\n', $var);
print "<ul>\n";
print "<li>", $_, "</li>\n" foreach @var;
print "</ul>\n";
