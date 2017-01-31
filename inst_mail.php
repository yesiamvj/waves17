<?php

    $err=0;

    if(isset($_REQUEST['q'])){
        if(!empty(trim($_REQUEST['q']))){
            
            $q=$_REQUEST['q'];
            
            $to="info@waves.org.in";
            $subject="Enquiry from Waves.org.in";
            $message=" Message : $q";
            
            mail($to, $subject, $message);
            
            echo "SUXCS";
            
        }
        else{
            $err++;
        }
    }
    else{
        $err++;
    }
    
    if($err!=0){
        echo 'ERR';
    }
    

?>
