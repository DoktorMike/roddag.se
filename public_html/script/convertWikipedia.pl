#!/usr/bin/perl -w

use strict;
use Data::Dumper;

unlink(glob("*.html"));

my @files = glob("*");

foreach my $fname (@files){
  system("../parseWikipedia.pl " . $fname . " > $fname.html");
}
