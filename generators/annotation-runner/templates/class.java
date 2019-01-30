package <%= packageName %>;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

// TODO: Import the annotation classes
import <%= packageName %>.AnnotatedClass;
import <%= packageName %>.ClassLevelAnnotation;
import <%= packageName %>.MethodLevelAnnotation;

public class <%= className %> {

  public static void main(String[] args) throws Exception {

		Class<AnnotatedClass> obj = AnnotatedClass.class;

		// If class is annotated with @ClassLevelAnnotation
		if (obj.isAnnotationPresent(ClassLevelAnnotation.class)) {

			Annotation annotation = obj.getAnnotation(ClassLevelAnnotation.class);
			ClassLevelAnnotation classLevelAnnotation = (ClassLevelAnnotation) annotation;

			System.out.printf("%nProperty :%s", classLevelAnnotation.property());
			System.out.printf("%nTags :");

			int tagLength = classLevelAnnotation.tags().length;
			for (String tag : classLevelAnnotation.tags()) {
				if (tagLength > 1) {
					System.out.print(tag + ", ");
				} else {
					System.out.print(tag);
				}
				tagLength--;
			}
		}

		// Process method level annotation
		for (Method method : obj.getDeclaredMethods()) {

			// If method is annotated with @MethodLevelAnnotation
			if (method.isAnnotationPresent(MethodLevelAnnotation.class)) {

				Annotation annotation = method.getAnnotation(MethodLevelAnnotation.class);
				MethodLevelAnnotation methodLevelAnnotation = (MethodLevelAnnotation) annotation;

				if (methodLevelAnnotation.enabled()) {
				  try {
						method.invoke(obj.newInstance());
						System.out.printf("Method invoked: '%s' %n", method.getName());
				  } catch (Throwable ex) {
						System.out.printf("Method failed: '%s' %n", method.getName(), ex.getCause());
				  }
				} else {
					System.out.printf("Method ignored: '%s' %n", method.getName());
				}
			}
		}
	}
}
