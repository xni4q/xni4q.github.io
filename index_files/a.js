function qiehuanclass(idmc,clsmc1,clsmc2)//切换class
{  
	if(document.getElementById(idmc).className==clsmc1)
	{
		document.getElementById(idmc).className=clsmc2;
	}
	else
	{
		document.getElementById(idmc).className=clsmc1;
	} 
} 