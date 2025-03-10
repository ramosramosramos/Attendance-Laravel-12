<?php

namespace App\Enum;

enum ThenResponse :string
{
   case NO_COURSE = 'No course selected or it has been deleted.';
   case NO_SUBJECT = 'No subject selected or it has been deleted.';
   case NO_SECTION = 'No section selected or it has been deleted.';
   case NO_YEAR_LEVEL = 'No year level selected or it has been deleted.';
}
