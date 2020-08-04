package pl.fc.app.logging;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Aspect
class ApplicationLoggerAspect {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Pointcut("within(pl.fc.app.controllers..*)")
    public void definePackagePointcuts() {
        //empty method, required by pointcut
    }

    @After("definePackagePointcuts()")
    public void logAfter(JoinPoint jp) {
        logger.debug("user: {} after method execution {}.{} () with arguments {}",
                SecurityContextHolder.getContext().getAuthentication().getName(),
                jp.getSignature().getDeclaringTypeName(),
                jp.getSignature().getName(), Arrays.toString(jp.getArgs()));
    }
}
